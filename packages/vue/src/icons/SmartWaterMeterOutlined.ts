// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SmartWaterMeterOutlinedSvg from '@colelab/icons-svg/es/asn/SmartWaterMeterOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SmartWaterMeterOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SmartWaterMeterOutlinedSvg }, slots);
  },
});
