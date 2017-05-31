import java.util.Date;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

import com.fire.modules.berth.service.BerthService;
import com.fire.utils.SpringContextHolder;


public class TimeTest {
	public static void main(String[] args) {
		// SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		// String strDate = "2017-01-27 03:32:19";
		// Date date = null;
		// try {
		// date = df.parse(strDate);
		// } catch (ParseException e) {
		// e.printStackTrace();
		// }
		// System.out.println(date.toString());
		// System.out.println(date.getMonth());
//
//		try {
//			SMSUtils.sendSMSMsg();
//		} catch (HttpException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		} catch (IOException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		} catch (InterruptedException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
		Runnable runnable = new Runnable() {  
            public void run() { 
    			
    			//获取所有用户30m内进入预定时间的预定记录
    			System.out.println(new Date());
            }  
        };  
        ScheduledExecutorService service = Executors  
                .newSingleThreadScheduledExecutor();  
        // 第二个参数为首次执行的延时时间，第三个参数为定时执行的间隔时间  
        service.scheduleAtFixedRate(runnable, 2, 5, TimeUnit.SECONDS);
	}
}
